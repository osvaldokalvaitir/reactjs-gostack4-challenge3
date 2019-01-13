export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        visible: true,
        cordinates: action.payload.cordinates,
      };
    case Types.HIDE:
      return {
        visible: false,
        cordinates: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  showModal: cordinates => ({
    type: Types.SHOW,
    payload: { cordinates },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
