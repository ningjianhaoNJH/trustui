/*
 * @Author: ningjh 375332835@qq.com
 * @Date: 2023-04-20 11:10:03
 * @LastEditors: ningjh 375332835@qq.com
 * @LastEditTime: 2023-04-20 11:44:53
 * @FilePath: \trustui\packages\components\script\build\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
const sass = gulpSass(dartSass);
//删除trustui

export const removeDist = () => {
  return delPath(`${pkgPath}/trustui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/trustui/lib/src`))
    .pipe(dest(`${pkgPath}/trustui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
