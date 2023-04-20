/*
 * @Author: ningjianhaoNJH 375332835@qq.com
 * @Date: 2023-04-20 16:07:03
 * @LastEditors: ningjianhaoNJH 375332835@qq.com
 * @LastEditTime: 2023-04-20 17:11:25
 * @FilePath: \trustui\packages\components\script\publish\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
console.log(pkgPath);
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/njh-trustui`);
};
export default series(async () => publishComponent());
