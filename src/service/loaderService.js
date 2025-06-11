let setLoader = null;

export const loaderService = {
  register(setLoaderCallback) {
    setLoader = setLoaderCallback;
  },

  show() {
    if (setLoader) setLoader(true);
  },

  hide() {
    if (setLoader) setLoader(false);
  },
};
