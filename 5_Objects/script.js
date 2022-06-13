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