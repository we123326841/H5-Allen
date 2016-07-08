<?php
/**
 * Created by PhpStorm.
 * User: wanghao
 * Date: 16/7/7
 * Time: 上午10:09
 */
header('Content-Type:text/event-stream');

for($i=0;$i<100;$i++){
    date_default_timezone_set("Asia/Shanghai");
    echo "event:newDate\n";
    echo 'data:'.date('Y-m-d H-i-s');
    echo "\n\n";
    flush();
    sleep(1);
}
//echo "hello heiQQQQQhei";