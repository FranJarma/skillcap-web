import { Layout } from "@/components/common/Layout";
import { Seo } from "@/components/common/Seo";
import React from "react";

const seo: Seo = {
  title: `Observe todos sus videos utilizando Skillcap`,
  description:
    "Disfruta de los mejores videos deportivos en tiempo real en Skillcap. Encuentra tus momentos favoritos de fútbol, padel, y más.",
};
const Videos = () => {
  return (
    <React.Fragment>
      <Layout seo={seo}>
        <h2 className="text-2xl text-center">Jugadas más votadas</h2>
        <h2 className="text-2xl text-center">Mejores goles</h2>
        <h2 className="text-2xl text-center">Mejores asistencias</h2>
      </Layout>
    </React.Fragment>
  );
};

export default Videos;
