import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { Header } from "@/components/shared/header";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16"></div>
            <ProductsGroupList
              title="Піци"
              items={[
                {
                  id: 1,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Комбо"
              items={[
                {
                  id: 6,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 7,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 8,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={2}
            />
            <ProductsGroupList
              title="Закуски"
              items={[
                {
                  id: 9,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 0,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 11,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 12,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
                {
                  id: 13,
                  name: "Піца",
                  imageUrl:
                    "https://chernivtsi.celentano.delivery/wp-content/uploads/2019/07/bavarska-445x445.jpg",
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={3}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
