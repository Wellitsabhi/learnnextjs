import { comments } from "../data";

export async function GET(
  _request: Request, // '_' as we are not ussing request parameter

  /*First arg. is request & Second arg. is Context Type,
    Currently only value of Context is params,
    'Params' which is an object, containing dynamic route parameters for current  route.
    We used destructuring here. 
    'id; corresponds to [id] folder name.
    */

  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;

  return Response.json(comments[index]);
}
