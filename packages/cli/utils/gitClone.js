/*
 * @Author: ningjh 375332835@qq.com
 * @Date: 2023-04-20 10:36:08
 * @LastEditors: ningjh 375332835@qq.com
 * @LastEditTime: 2023-04-20 10:51:04
 * @FilePath: \trustui\packages\cli\utils\gitClone.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import download from 'download-git-repo';
import chalk from 'chalk';
import ora from 'ora';

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        console.log('err', chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('模板下载成功！'));
      console.log(chalk.green(`cd ${name}\r\n`));
      console.log(chalk.blue('pnpm install\r\n'));
      console.log('pnpm run build:trustui\r\n');
      console.log('pnpm run trustui:dev\r\n');
      resolve();
    });
  });
};
