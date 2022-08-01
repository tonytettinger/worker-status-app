const sortByStringProp = (items: any[], prop: string) => {
  const sortFunction = (a, b) => {
    const nameA = a[prop].toUpperCase();
    const nameB = b[prop].toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  };
  const arrayForSort = [...items];
  return arrayForSort.sort(sortFunction);
};

export default sortByStringProp;
