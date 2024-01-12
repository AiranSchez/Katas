#!/usr/bin/env bash

echo "Creating a new kata..."
echo

echo "Name of kata folder:"
read kataname
echo

echo "Write a number of repository:"
repositories=($(ls .templates))
select repository in "${repositories[@]}"; do
    if [[ " ${repositories[*]} " =~ " ${repository} " ]]; then
        break
    else 
        echo "Invalid option"
    fi
    echo
done

if [[ ! -d $kataname ]]; then
    echo "Creating a folder $kataname"
    mkdir $kataname
fi

if [[ ! -d $kataname/$repository ]]; then
    echo "Creating the $repository template"
    cp -r .templates/$repository $kataname/$repository
    rm -rf $kataname/$repository/.git
    echo "Kata $kataname created in $kataname/$repository"
else 
    echo "Nothing has been done, ./$kataname/$repository was already created"
fi