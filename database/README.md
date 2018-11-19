# Install MongoDB

Source: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

## Download the binary files

curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-4.0.4.tgz

## Extract the files from the downloaded archive

tar -zxvf mongodb-osx-ssl-x86_64-4.0.4.tgz

## Ensure binaries in the PATH envrionment variable

Copy the binaries in the bin/ directory of the tarball into a directory listed in your PATH variable such as /usr/local/bin

Or, which is my method, you can add the following line to your shell's initalization script (e.g. ~/.bashrc or ~/.bash_profile)

export PATH=<mongodb-install-directory>/bin:$PATH

Replace <mongodb-install-directory> with the path to the extracted MongoDB archive


# Homebrew method

1. brew update

2. brew install mongodb

3. brew install mongodb --devel

# Running MongoDB for the first time

1. Create the data directory to which the mongod process will write data.

** Must be /data/db

mkdir -p /data/db

2. Run the script

./mongo.sh start

3. Run the CLI on another terminal 

mongo

4. Be Awesome


# TODO

1. Setup project database through single script run
2. Setup database images for project
