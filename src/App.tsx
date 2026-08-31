import { useEffect } from "react";
import type { IService } from "./entities/service/model/interface";
import { fetchServices } from "./entities/service/model/slice";
import { useAppDispatch, useAppSelector } from "./store";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { services, servicesLoading, servicesError } = useAppSelector(
    (state) => state.services,
  );

  console.log(services, servicesLoading, servicesError);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <>
      {servicesLoading && <p>Услуги загружаются</p>}
      {services &&
        services.length > 0 &&
        services.map((el: IService) => <p key={el.id}>{el.title}</p>)}
      {servicesError && <p>Ошибка</p>}
    </>
  );
}

export default App;
