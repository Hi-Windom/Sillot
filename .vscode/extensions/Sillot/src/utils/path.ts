import * as path from 'path';

export function resolveSystemPath(systemPath: string): string {
    // 解析环境变量
    const expandedPath = systemPath.replace(/%([^%]+)%/g, (_, envVar) => process.env[envVar] || '');
  
    // 使用path模块解析路径
    return path.normalize(expandedPath);
  }
