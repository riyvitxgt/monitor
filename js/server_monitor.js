/**
 * Created by zhukm on 2015/11/23.
 */
laypage({
    cont: $('#server #errorPager'),
    pages: 10,
    curr: 1,
    jump: function(obj, first){
        if(!first){
            console.log(obj.curr);
        }
    }
});
