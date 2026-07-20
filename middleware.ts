// middleware.ts

import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";


export async function middleware(request: NextRequest) {


  let response = NextResponse.next({
    request,
  });



  const supabase = createServerClient(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

    {

      cookies: {

        getAll() {

          return request.cookies.getAll();

        },


        setAll(cookiesToSet) {


          cookiesToSet.forEach(
            ({ name, value }) => {

              request.cookies.set(
                name,
                value
              );

            }
          );



          response = NextResponse.next({
            request,
          });



          cookiesToSet.forEach(
            ({ name, value, options }) => {

              response.cookies.set(
                name,
                value,
                options
              );

            }
          );


        },

      },

    }

  );




  // IMPORTANTE:
  // refresca la sesión de Supabase
  await supabase.auth.getUser();




  return response;

}





export const config = {


  matcher: [

    /*
      Ejecutar en todas las rutas excepto:
      - archivos internos de Next
      - imágenes optimizadas
      - favicon
    */

    "/((?!_next/static|_next/image|favicon.ico).*)",

  ],


};