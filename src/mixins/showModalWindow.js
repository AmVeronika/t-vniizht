export const showModalWindow = {
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    showModal(event) {
      this.$emit('hideModal', event);
      this.openModal = event;
    },
  },
};
