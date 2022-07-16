//use std::process::Command;

#[path = "utils.rs"] mod utils;

fn main() {

utils::rm_dir_contents("./");

}

// Command::new("ls")
//         .arg("-l")
//         .arg("-a")
//         .spawn()
//         .expect("ls command failed to start");