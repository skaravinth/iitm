import {Card, CardHeader, CardBody, Image,CardFooter} from "@heroui/react";

const AddImage=({imagecontent,Footercontent,handleOpen})=>{
  return (
   
    <div className="flex justify-between" onClick={handleOpen}>

    <Card className="p-4 flex justify-around items-center shadow-xl border-1 border-gray-100 rounded-md" >
     
      <CardBody className="">
        <Image
          alt="Card background"
          className="object-contain rounded-xl "
          src={imagecontent}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 mt-3 px-2 flex-col items-start">
        {Footercontent}
      </CardFooter>
    </Card>
   </div>
    
  );
}

export default AddImage
