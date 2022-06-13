var videoName = "Intro to JS"
var fileFormat = "mp4"
var duration = "3:20"
var owner = "Dsoriano"

function getVideoName() {
    return videoName;
}

function getFileFormat() {
    return fileFormat;
}

function getDuration() {
    return duration;
}

function getOwner() {
    return owner;
}

var video = {
    videoName : "Intro to JS",
    fileFormat : "mp4",
    duration : "3:20",
    owner : "Dsoriano",
    getVideoName: function() {
        // this keyword referes to the current context, always refers to a single object
        return this.videoName;
    },
    getFileFormat: function() {
        return this.fileFormat;
    },
    getDuration: function() {
        return this.duration;
    },
    getOwner: function() {
        return this.owner;
    }
}

console.log(video.getVideoName());

//Constructor function
function Video(name, format, duration, owner) {
    this.videoName = name;
    this.fileFormat = format;
    this.duration = duration;
    this.owner = owner;

    this.presentation = function() {
        console.log(this.videoName + " directed by " + this.owner);
    }
}

var newVideo = new Video("test", "mp4", "3.13", "tester");

console.log(newVideo);
console.log(newVideo.presentation());