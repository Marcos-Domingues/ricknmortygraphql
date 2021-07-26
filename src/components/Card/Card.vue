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
  props: ["name", "image", "txt1", "txt2"],
};
</script>
<style>
.arrayEllipsis{
  height: 120px;
  overflow: auto;
}
</style>
