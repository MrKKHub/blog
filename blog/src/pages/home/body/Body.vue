<template>
  <div class="body-scroll">
    <div class="body">
      <div class="wrapper border-1px" v-for="item of textlist" :key="item.id">
        <div class="info">
          <i>{{item.name}}·</i>
          <i>{{item.time}}·</i>
          <i>{{item.type}}·</i>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="pinglun">
          <div class="good">
            <span class="iconfont icondianzan">{{item.zan}}</span>
          </div>
          <div class="less">
            <span class="iconfont icondianzan-copy">{{item.les}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBody",
  data() {
    return {
      textlist: [
        {
          id: 0,
          name: "守候i",
          time: "2小时前",
          type: "娱乐",
          zan: 24,
          les: 12,
          title:
            "网关 Spring-Cloud-Gateway 源码解析 —— 过滤器 (4.6) 之 WebSocketRoutingFilter"
        },
        {
          id: 1,
          name: "holdlalal",
          time: "4小时前",
          type: "电影",
          zan: 18,
          les: 13,
          title:
            "【架构设计的艺术】Kafka如何通过精妙的架构设计优化JVM GC问题？【石杉的架构笔记】"
        },
        {
          id: 3,
          name: "恐惧哇啊",
          time: "1小时前",
          type: "实时热点",
          zan: 36,
          les: 1,
          title: "【前端词典】提高幸福感的 9 个 CSS 技巧"
        },
        {
          id: 4,
          name: "buji布达拉",
          time: "24小时前",
          type: "实时热点",
          zan: 18,
          les: 30,
          title:
            "蚂蚁金服 SOFADashboard 启动开源共建 | SOFAStack 一站式管控平台"
        },
        {
          id: 5,
          name: "恐惧哇啊",
          time: "1小时前",
          type: "实时热点",
          zan: 36,
          les: 1,
          title: "【前端词典】提高幸福感的 9 个 CSS 技巧"
        },
        {
          id: 6,
          name: "holdlalal",
          time: "4小时前",
          type: "电影",
          zan: 18,
          les: 13,
          title:
            "【架构设计的艺术】Kafka如何通过精妙的架构设计优化JVM GC问题？【石杉的架构笔记】"
        }
      ]
    };
  },
  mounted() {
    let scroll = new this.BScroll(".body-scroll", {
      scrollY: true,
      click: true
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';

.wrapper {
  height: 2.14rem;
  background-color: #fff;
  border-1px(#eee);
  padding-top: 0.4rem;
  padding-left: 0.5rem;

  .info {
    color: #b2bac2;
  }

  .title {
    margin-top: 0.2rem;
    font-weight: bold;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pinglun {
    display: flex;
    border: 1px solid #eee;
    width: 2.08rem;
    height: 0.36rem;
    margin-top: 0.4rem;

    .good {
      border-right: 1px solid #eee;
    }

    .less, .good {
      flex: 1;
      text-align: center;
      color: #b2bac2;
    }
  }
}
</style>
