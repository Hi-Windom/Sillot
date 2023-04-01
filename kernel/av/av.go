// SiYuan - Build Your Eternal Digital Garden
// Copyright (c) 2020-present, b3log.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// Package av 包含了属性视图（Attribute View）相关的实现。
package av

import (
	"bytes"
	"database/sql"
	"os"
	"path/filepath"
	"strings"

	"github.com/88250/lute/ast"
	"github.com/K-Sillot/filelock"
	"github.com/K-Sillot/gulu"
	"github.com/K-Sillot/logging"
	"github.com/siyuan-note/siyuan/kernel/util"
)

// AttributeView 描述了属性视图的结构。
type AttributeView struct {
	Spec    int       `json:"spec"`
	ID      string    `json:"id"`      // 属性视图 ID
	Columns []*Column `json:"columns"` // 表格列名
	Rows    []*Row    `json:"rows"`    // 表格行记录

	Type        AttributeViewType      `json:"type"`        // 属性视图类型
	Projections []string               `json:"projections"` // 显示的列名，SELECT *
	Filters     []*AttributeViewFilter `json:"filters"`     // 过滤规则，WHERE ...
	Sorts       []*AttributeViewSort   `json:"sorts"`       // 排序规则，ORDER BY ...
}

// AttributeViewType 描述了属性视图的类型。
type AttributeViewType string

const (
	AttributeViewTypeTable AttributeViewType = "table" // 属性视图类型 - 表格
)

func NewAttributeView(id string) *AttributeView {
	return &AttributeView{
		Spec:        0,
		ID:          id,
		Columns:     []*Column{{ID: ast.NewNodeID(), Name: "Block", Type: ColumnTypeBlock}},
		Rows:        []*Row{},
		Type:        AttributeViewTypeTable,
		Projections: []string{},
		Filters:     []*AttributeViewFilter{},
		Sorts:       []*AttributeViewSort{},
	}
}

func (av *AttributeView) GetColumnNames() (ret []string) {
	ret = []string{}
	for _, column := range av.Columns {
		ret = append(ret, column.Name)
	}
	return
}

func (av *AttributeView) InsertColumn(index int, column *Column) {
	if 0 > index || len(av.Columns) == index {
		av.Columns = append(av.Columns, column)
		return
	}

	av.Columns = append(av.Columns[:index+1], av.Columns[index:]...)
	av.Columns[index] = column
}

type AttributeViewFilter struct {
	Column   string         `json:"column"`
	Operator FilterOperator `json:"operator"`
	Value    string         `json:"value"`
}

type FilterOperator string

const (
	FilterOperatorEq      FilterOperator = "="
	FilterOperatorNe      FilterOperator = "!="
	FilterOperatorGt      FilterOperator = ">"
	FilterOperatorGe      FilterOperator = ">="
	FilterOperatorLt      FilterOperator = "<"
	FilterOperatorLe      FilterOperator = "<="
	FilterOperatorIn      FilterOperator = "IN"
	FilterOperatorNotIn   FilterOperator = "NOT IN"
	FilterOperatorLike    FilterOperator = "LIKE"
	FilterOperatorNotLike FilterOperator = "NOT LIKE"
)

type AttributeViewSort struct {
	Column string    `json:"column"`
	Order  SortOrder `json:"order"`
}

type SortOrder string

const (
	SortOrderAsc  SortOrder = "ASC"
	SortOrderDesc SortOrder = "DESC"
)

func ParseAttributeView(avID string) (ret *AttributeView, err error) {
	avJSONPath := getAttributeViewDataPath(avID)
	if !gulu.File.IsExist(avJSONPath) {
		ret = NewAttributeView(avID)
		return
	}

	data, err := filelock.ReadFile(avJSONPath)
	if nil != err {
		logging.LogErrorf("read attribute view [%s] failed: %s", avID, err)
		return
	}

	ret = &AttributeView{}
	if err = gulu.JSON.UnmarshalJSON(data, ret); nil != err {
		logging.LogErrorf("unmarshal attribute view [%s] failed: %s", avID, err)
		return
	}
	return
}

func SaveAttributeView(av *AttributeView) (err error) {
	data, err := gulu.JSON.MarshalIndentJSON(av, "", "\t")
	if nil != err {
		logging.LogErrorf("marshal attribute view [%s] failed: %s", av.ID, err)
		return
	}

	avJSONPath := getAttributeViewDataPath(av.ID)
	if err = filelock.WriteFile(avJSONPath, data); nil != err {
		logging.LogErrorf("save attribute view [%s] failed: %s", av.ID, err)
		return
	}
	return
}

func getAttributeViewDataPath(avID string) (ret string) {
	av := filepath.Join(util.DataDir, "storage", "av")
	ret = filepath.Join(av, avID+".json")
	if !gulu.File.IsDir(av) {
		if err := os.MkdirAll(av, 0755); nil != err {
			logging.LogErrorf("create attribute view dir failed: %s", err)
			return
		}
	}
	return
}

func RebuildAttributeViewTable(tx *sql.Tx, av *AttributeView) (err error) {
	avID := av.ID
	var columns []string
	for _, c := range av.Columns {
		columns = append(columns, "`"+c.ID+"`")
	}

	_, err = tx.Exec("DROP TABLE IF EXISTS `av_" + avID + "`")
	if nil != err {
		logging.LogErrorf("drop table [%s] failed: %s", avID, err)
		return
	}

	_, err = tx.Exec("CREATE TABLE IF NOT EXISTS `av_" + avID + "` (" + strings.Join(columns, ", ") + ")")
	if nil != err {
		logging.LogErrorf("create table [%s] failed: %s", avID, err)
		return
	}

	for _, r := range av.Rows {
		buf := bytes.Buffer{}
		for i, _ := range r.Cells {
			buf.WriteString("?")
			if i < len(r.Cells)-1 {
				buf.WriteString(", ")
			}
		}

		var values []interface{}
		for _, c := range r.Cells {
			values = append(values, c.Value)
		}

		_, err = tx.Exec("INSERT INTO `av_"+avID+"` VALUES ("+buf.String()+")", values...)
		if nil != err {
			logging.LogErrorf("insert row [%s] failed: %s", r.ID, err)
			return
		}
	}

	return
}
