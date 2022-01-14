import StyledContainer from "@/components/StyledContainer";
import Hero from "@/components/Hero";
import PhotoContainer from "@/components/PhotoContainer";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <>
      <StyledContainer>
        <h1 className='bold'>Howdy Y'all</h1>
        <PhotoContainer>
          <Photo
            src={`https://images.pexels.com/photos/10293190/pexels-photo-10293190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
          <Photo
            src={`https://images.pexels.com/photos/10293190/pexels-photo-10293190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
          <Photo
            src={`https://images.pexels.com/photos/10293190/pexels-photo-10293190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
          <Photo
            src={`https://images.pexels.com/photos/10293190/pexels-photo-10293190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
          <Photo
            src={`https://images.pexels.com/photos/10293190/pexels-photo-10293190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
          <Photo
            src={`https://images.pexels.com/photos/10293190/pexels-photo-10293190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          />
        </PhotoContainer>
      </StyledContainer>
    </>
  );
}
