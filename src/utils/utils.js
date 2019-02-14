export default {
    formatDate(time) {
        if (!time) return '';
        let date = new Date(time);
        let yy = date.getFullYear();
        let mo = date.getMonth()+1>9?date.getMonth()+1:"0"+(date.getMonth()+1);
        let dd = date.getDate()>9?date.getDate():"0"+date.getDate();
        let hh = date.getHours()>9?date.getHours():"0"+date.getHours();
        let mi = date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
        let ss = date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
        return yy + "-" + mo + "-" + dd + "  " + hh + ":" + mi + ":" + ss;
    }
}