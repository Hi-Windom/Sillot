import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Select, selectClasses } from "@mui/joy";

export const Select_KeyboardArrowDown = (props) => {
    // 定义默认的sx样式
    const defaultSx = {
        [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
            },
        },
    };

     // 检查是否有传入的sx样式，并进行合并
     const { sx, ...otherProps } = props;
     const mergedSx = sx
         ? Object.assign({}, defaultSx, sx)
         : defaultSx;

    return (
        <Select
            {...otherProps} // 传递剩余的props，不包括sx
            indicator={<KeyboardArrowDown />}
            sx={mergedSx} // 使用合并后的sx
        />
    );
};
