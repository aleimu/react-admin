import { useState, useContext, useEffect } from 'react';
import { MyContext } from '~/tools/context.js';
/**
 * 需要使用全局变量时，或多个组件共享状态时，使用model
 */

function useGlobalModel() {
  const [user, setUser] = useState({});
  const [app, setApp] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOncall, setIsOncall] = useState(false);
  const { AppContext, updateAppContext } = useContext(MyContext);

  useEffect(() => {
    updateAppContext({ app: 'mimo', username: 'lgj', isAdmin: true });
  }, []);

  return [
    AppContext,
    user,
    setUser,
    app,
    setApp,
    isAdmin,
    setIsAdmin,
    isOncall,
    setIsOncall,
  ];
}

export default useGlobalModel;
