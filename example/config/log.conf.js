var path = require('path');
module.exports = {

	listenPort:3000,//监听端口，如果配合clusterplus监听多个端口，这里也可以使用[3000, 3001, 3002, 3003]数组形式，rrestjs会智能分析
	baseDir: path.join(__dirname, '/../..'), //绝对目录地址，下面的目录配置都是根据这个目录的相对地址，这里是根据config文件进行配置地址
//logger log4js 配置
	isLog:true, //是否开启日志，过多的记录日志会影响性能，但是能记录系统运行情况
	logLevel:'debug',//['trace','debug','info','warn','error', 'fatal'] 日志等级
	logPath:'/mylogs', // "/mylogs/console.log" 日志存放目录
	logMaxSize:1024*1024*10, //单个日志文件大小
	logFileNum:10, //当单个日志文件大小达标时，自动切分，这里设置最多切分多少个日志文件
//cluster配置
	isCluster:true, //是否开启多进程集群
	isClusterAdmin:true,//进程监听管理功能是否开启
	adminAuthorIp:/^192.168.10.87$/,//允许访问管理的IP地址
	ClusterNum:4, //开启的进程数
	ClusterReload:'/example',//只有当进程数为1时，进入开发模式，可以监听此文件夹下的改动，包括子文件夹，不用重复 ctrl+c 和 上键+enter		

}