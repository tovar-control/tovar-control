<?

//$files = scandir("./");
//$files= array_merge($files,scandir("./pre_lp/"));
$files=find_all_files("./");

foreach ($files as $file) {

    if (strpos($file,'index.php')===false) {continue;}

    $html=file_get_contents($file);
    $html = preg_replace('/<\?(?:php|=|\s+).*?\?>/s','',$html); 
    $file1=str_replace('index.php','index.html',$file);
    $confirm=str_replace('index.php','confirm.html',$file);
    file_put_contents($file1,$html);
    echo $file1."<br>";    
    if (strpos($file,'pre_lp')===false) {copy('confirm.html',$confirm);}

}
                                    
foreach ($files as $file) {

    if (strpos($file,'.php')>0) {
        if (strpos($file,'remove.php')===false) unlink("$file");
    }
    if (strpos($file,'.csv')>0) {unlink("$file");}
    if (strpos($file,'mails.txt')>0) {unlink("$file");}
}    






function find_all_files($dir)
{
    $root = scandir($dir);
    foreach($root as $value)
    {
        if($value === '.' || $value === '..') {continue;}
        if(is_file("$dir/$value")) {$result[]="$dir/$value";continue;}
        foreach(find_all_files("$dir/$value") as $value)
        {
            $result[]=$value;
        }
    }
    return $result;
} 



