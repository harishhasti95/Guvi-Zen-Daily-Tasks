var videos = ["https://www.youtube.com/embed/o-alZXwPfD8","https://www.youtube.com/embed/WX9fRb9M_bY","https://www.youtube.com/embed/nRBu6eSoPNo","https://www.youtube.com/embed/EwjDgEFjlPk","https://www.youtube.com/embed/AmKKPpjpNl0","https://www.youtube.com/embed/Kk1P_91DaBI","https://www.youtube.com/embed/sKxrrLbR6hA","https://www.youtube.com/embed/3-uKKdSLHsY","https://www.youtube.com/embed/-5lwmy5zE58","https://www.youtube.com/embed/Ok0gT3gphHI","https://www.youtube.com/embed/P85KCjgj7YM","https://www.youtube.com/embed/N-3QnxFQWJ0"]

class TV{
    vid_arr;
    index = 0;
    constructor(urls: Array<string>){
        this.vid_arr = urls;
        this.settingIndex();
        var but_one = (<HTMLButtonElement>document.getElementById('one'));
        but_one.onclick = this.channelUp();
        var but_two = (<HTMLButtonElement>document.getElementById('two'));
        but_one.onclick = this.channelDown();
    }
    settingIndex(){
        var ifr = (<HTMLEmbedElement>document.getElementsByTagName("embed")[0]);
        ifr.src = this.vid_arr[this.index];
        console.log(ifr);
    }
    channelUp(): ()=> void{
        return () => {
            if(this.index<this.vid_arr.length){
                this.index +=1;
                console.log(this.index)
                this.settingIndex();
            }
            else{
                console.log('Limit Exceeded');
            }
            
        }
    }
    channelDown(): ()=> void{
        return () => {
            this.index-=1;
            this.settingIndex();
        }
    }
}
let some = new TV(videos);