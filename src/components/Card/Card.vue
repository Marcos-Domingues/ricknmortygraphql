<template>
  <section>
    <div class="container mt-5">
        <div class="card">
          <img :src="image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">
              {{ txt1 }}
            </p>
            <p class="arrayEllipsis card-text">
              <small>
                {{ txt2 }}
              </small>
            </p>
          </div>
        </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'my-card',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    txt1: {
      type: String,
      required: true
    },
    txt2: {
      type: String,
      required: false
    }
  }
};
</script>
<style>
.arrayEllipsis{
  height: 120px;
  overflow: auto;
}
</style>
