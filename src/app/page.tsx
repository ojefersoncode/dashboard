import { ChartOverView } from "@/components/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Percent, Users2 } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Total vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4 " />
            </div>
            <CardDescription>
              Total vendas 30 dias
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$: 3,462,92</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Novos clientes
              </CardTitle>
              <Users2 className="ml-auto w-4 h-4 " />
            </div>
            <CardDescription>
              Total de clientes novos
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">192</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Pedidos de hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4 " />
            </div>
            <CardDescription>
              Ultimas 24 horas
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">87</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Pedidos 30 dias
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4 " />
            </div>
            <CardDescription>
              Ultimos 30 dias
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">87</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4 ">
        <ChartOverView />
      </section>

    </main>
  );
}
