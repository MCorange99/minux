#!/usr/bin/bash

pushd ./system/
cargo build
./target/debug/system
popd
