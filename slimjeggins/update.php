 <?
isset($_POST['url'])?$url=$_POST['url']:$url='';
isset($_POST['file'])?$url=$_POST['file']:$file='';
isset($_POST['password'])?$password=$_POST['password']:$password='';
session_start();
if ($password=='8kle3bsm0') {
    setcookie('a', 1, time() + 3600*24*30, '/');
    $auth=1;
} else {
    $auth=$_COOKIE['a'];
}
if ($auth!=1) {?>    
<head><meta charset="utf-8"></head><body>   
    <form method="post">
     Пароль:<br>
     <input  type="password" name="password" style="width:350px">     
     <input type="submit">          
    </form>
    
</body>  
<?
exit;
}
    
?>
<head><meta charset="utf-8"></head><body>   
    <form method="post" enctype="multipart/form-data">
     url:<br>
     <input  type="text" name="url" style="width:350px" value="<?=$url?>"><br>
     file:<br>
     <input  type="file" name="file" style="width:350px" value="<?=$file?>"><br>
     
     <input type="submit">     
     
    </form>
</body>    
    
<?
if (!isset($_POST['url'])) exit;
$url=trim($_POST['url']);
if (empty($url)) exit;

if (strpos($url,'http://')===false) {$url='http://'.$url;}
if ($_POST['url']!='') {
    $parse=parse_url ($url);
    $host=$parse['host'];
    $path=$parse['path'];
    $paths=explode('/',$path);
    $file=array_pop($paths);
    //if ($host=='jeggins.slimex-plus.eu')  {$host='land/jeggins.slimex-plus.eu';}
    //if ($host=='sm-watch.eu')  {$host='sm-watch.eu/data/www/sm-watch.eu';}
    $link='/home/land/'.$host.implode('/',$paths).'/';
    //echo $link;
    if (!file_exists($link)) {echo "Папка $link на сервере не найдена";exit;}
    if (!file_exists($link.$file)) {echo "Файл $file не найден в папке $link";exit;}
    $ext=end(explode(".", $file));
    if (($ext!='jpg')&&($ext!='png')) {echo "Файл $file должен быть с расширением .jpg или .png($ext)";exit;}
    
    chmod ( $link , 777 );
    chmod ( $link.$file , 777 );
    
    $tmp_name  = $_FILES [ 'file' ] [ 'tmp_name' ];
    $file_name  = $_FILES [ 'file' ] [ 'name' ];
    if ($tmp_name=='') {echo "ошибка загрузки файла";exit;}

    //$file_ext=checkImageExt($tmp_name,' Неверный тип файла');

    if ( move_uploaded_file ( $tmp_name, $link.$file  ) ) {
         echo "$link $file Заменено успешно!";
    } else {
        echo "ошибка перемещения файла";
    }
    
    
    //var_dump($command);
    //var_dump($file);
}    


