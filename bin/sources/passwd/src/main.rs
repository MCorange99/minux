use hex_literal::hex;
use sha2::{Sha256, Digest};

fn main() {
    // create a Sha256 object
    let mut hasher = Sha256::new();

    // write input message
    hasher.update();

    // read hash digest and consume hasher
    let result = hasher.finalize();
}
