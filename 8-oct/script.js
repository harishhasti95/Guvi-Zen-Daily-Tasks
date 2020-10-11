var videos = ["https://www.youtube.com/embed/o-alZXwPfD8", "https://www.youtube.com/embed/WX9fRb9M_bY", "https://www.youtube.com/embed/nRBu6eSoPNo", "https://www.youtube.com/embed/EwjDgEFjlPk", "https://www.youtube.com/embed/AmKKPpjpNl0", "https://www.youtube.com/embed/Kk1P_91DaBI", "https://www.youtube.com/embed/sKxrrLbR6hA", "https://www.youtube.com/embed/3-uKKdSLHsY", "https://www.youtube.com/embed/-5lwmy5zE58", "https://www.youtube.com/embed/Ok0gT3gphHI", "https://www.youtube.com/embed/P85KCjgj7YM", "https://www.youtube.com/embed/N-3QnxFQWJ0"];
var TV = /** @class */ (function () {
    function TV(urls) {
        this.index = 0;
        this.vid_arr = urls;
        this.settingIndex();
        var but_one = document.getElementById('one');
        but_one.onclick = this.channelUp();
        var but_two = document.getElementById('two');
        but_one.onclick = this.channelDown();
    }
    TV.prototype.settingIndex = function () {
        var ifr = document.getElementsByTagName("embed")[0];
        ifr.src = this.vid_arr[this.index];
        console.log(ifr);
    };
    TV.prototype.channelUp = function () {
        var _this = this;
        return function () {
            if (_this.index < _this.vid_arr.length) {
                _this.index += 1;
                console.log(_this.index);
                _this.settingIndex();
            }
            else {
                console.log('Limit Exceeded');
            }
        };
    };
    TV.prototype.channelDown = function () {
        var _this = this;
        return function () {
            _this.index -= 1;
            _this.settingIndex();
        };
    };
    return TV;
}());
var some = new TV(videos);
