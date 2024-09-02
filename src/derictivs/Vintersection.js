export default {
  mounted(el, binding) {
    console.log(el, binding);

    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(el);
  },
  name: "intersection",
};
