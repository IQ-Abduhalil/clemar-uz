export const openModal = () => {
  return {
    type: "openModal",
  };
};

export const closeModal = () => {
  return {
    type: "closeModal",
  };
};

export const addLike = (like) => {
  return {
    type: "addLike",
    payload: like,
  };
};

export const disLike = (likeId) => {
  return {
    type: "disLike",
    payload: likeId,
  };
};
