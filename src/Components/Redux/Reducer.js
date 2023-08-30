const basicReducer = (storeData = {all: [],popular: [],toprated: [],upcoming: [],trending: [],comedy:[],actionMovie:[], horror:[],  cast: [], videokey: [],search: [],},action) => {
  if (action.type === "popular") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      popular: action.payload,
    };
  } else if (action.type === "toprated") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      toprated: action.payload,
    };
  } else if (action.type === "upcoming") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      upcoming: action.payload,
    };
  } else if (action.type === "trending") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      trending: action.payload,
    };
    
  }
  else if (action.type === "comedy") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      comedy: action.payload,
    };
  }

  else if (action.type === "actionMovie") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      actionMovie: action.payload,
    }
  }

  else if (action.type === "horror") {
    return {
      ...storeData,
      all: [...storeData.all, ...action.payload],
      horror: action.payload,
    }
  }




  else if (action.type === "cast") {
    return {
      ...storeData,
      cast: action.payload,
    };
  } else if (action.type === "video-key") {
    return {
      ...storeData,
      videokey: action.payload,
    };
  } else if (action.type === "search") {
    return {
      ...storeData,
      search: action.payload,
    };
  }
  return storeData;
};
export default basicReducer;
