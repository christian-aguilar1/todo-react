import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [dataStatus, setDataStatus] = React.useState({loading: true, error: false});

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setDataStatus({...dataStatus, loading: false})
        // throw new Error()
      } catch (e) {
        setDataStatus({loading:false, error:true})
      }
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);

      setItem(newItem);

    } catch (e) {
      setDataStatus({loading:false, error:true})
    }
  }

  return {item, saveItem, dataStatus};
}

export {useLocalStorage};