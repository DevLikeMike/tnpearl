import StyledContainer from "@/components/StyledContainer";
import Hero from "@/components/Hero";
import PhotoContainer from "@/components/PhotoContainer";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <>
      <StyledContainer>
        <PhotoContainer>
          <Photo
            src={`https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
            styleSize={"large-photo"}
          />
          <Photo
            src={`https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`}
            styleSize={"small-photo"}
          />
          <Photo
            src={`https://images.pexels.com/photos/3889935/pexels-photo-3889935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
            styleSize={"small-photo"}
          />
        </PhotoContainer>
      </StyledContainer>
    </>
  );
}
