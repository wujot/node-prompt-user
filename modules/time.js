function timeFormat(time) {

	var hrs = Math.floor(time / 3600);
    var min = Math.floor((time - (hrs * 3600)) / 60);
    var seconds = time - (hrs * 3600) - (min * 60);
    seconds = Math.round(seconds * 100) / 100

	return hrs + ' godz. ' + min + ' min. ' + seconds +' sek.';
}

exports.timeFormat = timeFormat;