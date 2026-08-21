<!-- pages/index.vue -->
<template>
  <div class="container">
    <h1>滚动动画测试</h1>
    <p>滚动页面观察效果</p>
    <div
        v-for="(item, index) in items"
        :key="item.id"
        class="card"
        v-intersection
        :style="{ transitionDelay: index * 200 + 'ms' }"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </div>

    <!-- 带参数 -->
    <div
        class="card special"
        v-intersection="{
          threshold: 0.5,

          className: 'hidden'
        }"
    >
      <h3>🔥 特殊卡片</h3>
      <p>露出50%触发，只触发一次</p>
    </div>


  </div>
</template>

<script setup>
const items = [
  { id: 1, title: '卡片 1', desc: '第一个卡片' },
  { id: 2, title: '卡片 2', desc: '第二个卡片' },
  { id: 3, title: '卡片 3', desc: '第三个卡片' },
  { id: 4, title: '卡片 4', desc: '第四个卡片' },
  { id: 5, title: '卡片 5', desc: '第五个卡片' }
]
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 8px;
}

.container > p {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

.card {
  padding: 24px 32px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  border: 1px solid #eee;

  /* 默认：可见 */
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease;
}

/* 有 inView 类：隐藏 */
.card.inView {
  opacity: 0;
  transform: translateY(40px);
}

/* 特殊卡片 */
.card.special {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
}

.card.special h3 {
  color: #fff;
}

.card.special p {
  color: rgba(255,255,255,0.8);
}

.card.special.hidden {
  opacity: 0;
  transform: scale(0.9);
}

.loading {
  text-align: center;
  color: #999;
  padding: 40px;
}
</style>