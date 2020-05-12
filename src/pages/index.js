import React from "react"
import Layout from "./../components/Layout"
import ImagenHotel from "../components/ImagenHotel"
import ContenidoInicio from "../components/ContenidoInicio"
import useHabitaciones from "./../hooks/useHabitaciones"
import { css } from '@emotion/core';
import HabitacionPreview from "../components/HabitacionPreview"
import styled from '@emotion/styled';
import { graphql } from "gatsby"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = ({ data }) => {
  
  const habitaciones = data.allDatoCmsHabitacion.nodes;

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2 css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
      `}>Nuestras Habitaciones</h2>

      <ListadoHabitaciones>
        {habitaciones.map(habitacion => (
          <HabitacionPreview habitacion={habitacion} key={habitacion.id} />
        ))}
      </ListadoHabitaciones>

    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
query {
  allDatoCmsHabitacion {
    nodes {
      titulo
      id
      slug
      contenido
      imagen {
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}
`;
