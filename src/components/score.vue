<template>
	<div class="container">
		<!--得分-->
		<div class="score_container">
			<p class="score">
				<span class="my_score">{{score}}</span>
				<span class="my_score">分</span>
			</p>
			<p class="comment">{{comment}}</p>
		</div>
		<!--分享按钮-->
		<div class="share" @click="isShow=!isShow"></div>
		<!--遮罩层-->
		<div class="mask back_img" v-show="isShow" @click="isShow=!isShow">
			<img class="share_img" src="../images/5-2.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		name:"score",
		data(){
			return {
				isShow:false,
				score:0,
				comment:""
			}
		},
		created(){
			let myAnswerList=this.$store.state.myAnsers;
			let ringhtAnswerList=this.$store.state.rightAnswers;
//			for(let i=0;i<ringhtAnswerList.length;i++){
////				console.log("myAnswerList="+myAnswerList[i]);
////				console.log("ringhtAnswerList="+ringhtAnswerList[i]);
//				if(ringhtAnswerList[i]==myAnswerList[i]){
//					this.score+=20;
//				}
//			}

//			ringhtAnswerList.forEach(function(item,index){
//				if(item==myAnswerList[index]){
//					this.score+=20;
//				}
//			});
			ringhtAnswerList.forEach((item,index)=>{
				if(item==myAnswerList[index]){
					this.score+=20;
				}
			});
			if(this.score>=80){
				this.comment="你很聪明，脑袋瓜可以和图灵相比了";
			}else if(this.score>=60){
				this.comment="你很聪明，脑袋瓜可以和爱因斯坦相比了";
			}else if(this.score>=40){
				this.comment="你很聪明，脑袋瓜可以和牛顿相比了";
			}else if(this.score>=20){
				this.comment="你该努力了，加油，你可以的";
			}else {
				this.comment="你很聪明，只是不适合做学问";
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.container{
		background: url(../images/4-1.jpg) no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0;
		margin: 0;
		border: hidden;
	}
	/*得分开始*/
	.score_container{
		width: 10rem;
		height: 8rem;
		background: url(../images/4-2.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
	    top: 6rem;
	    left: 50%;
	    margin-left: -5rem;
	    .score{
	    	text-align: center;
	    	margin-top: 3.5rem;
    		margin-left: 1rem;
	    	.my_score{
	    		font-size: 0.8rem;
	    		font-weight: 500;
	    		color: red;
	    	}
	    }
	    .comment{
	    	color: peru;
	    	font-size: 0.8rem;
	    	text-align: center;
	    	padding: 0 0.8rem;
	    }
	}
	/*得分结束*/
	
	/*分享开始*/
	.share{
		width: 6rem;
		height: 3rem;
		background: url(../images/4-3.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 16rem;
		left: 50%;
		margin-left: -3rem;
		
	}
	/*分享结束*/
	
	/*遮罩层开始*/
	.mask{
		width: 100%;
		height: 100%;
		background-image: url(../images/5-1.png) ;
		opacity: 0.8;
		.share_img{
			width: 12rem;
			height: 10rem;
			position: absolute;
			top: 0;
			left: 50%;
			margin-left: -6rem;
		}
	}
	/*遮罩层结束*/
</style>