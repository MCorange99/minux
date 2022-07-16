// use std::result;
use std::fs;
use std::io;
use std::io::{Error, ErrorKind};
use std::fs::DirEntry;
use std::path::Path;
// Deletes all files in a folder and returns the deleted files in a vec
// returns str on, well, error
pub fn rm_dir_contents(dir: &str) -> Result<Vec<&str>, Error> {
    if dir.is_dir(){
    let mut file_list = Vec::new();
    
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        println!("{:?}", path);
        file_list.push(path.into_os_string().into())
    }
    
    
    Ok(file_list)

    } else {
        Err(Error::new(ErrorKind::Other, "[1] Directory does not exist!"))
    }
}