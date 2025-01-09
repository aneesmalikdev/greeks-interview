import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Rating from "./ui/rating";

const FerryCard = ({ operator }: any) => {
  return (
    <Card
      key={operator.name}
      className="border rounded-lg overflow-hidden shadow-md"
    >
      <div className="">
        <div className="flex justify-between items-start">
          <div className="space-y-4 w-full">
            <div className="p-4 w-full bg-[#f8f8f8] flex flex-col md:flex-row md:justify-between justify-start md:items-center items-start">
              <img
                src={operator.logo}
                alt={operator.name}
                className="h-12 mb-2"
              />
              <div className="text-lg font-semibold flex flex-col md:items-end items-start">
                <div>{operator.name}</div>
                <div className="text-right flex items-center justify-center">
                  <div className="flex items-center">
                    {/* <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" /> */}
                    <Rating rating={operator.rating} />
                  </div>
                  <div className="text-sm text-gray-500">
                    by {operator.reviews} customers
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
              <div>
                <div className="mb-4 flex flex-col text-gray-500 text-sm">
                  <div className=" font-bold text-gray-700">Operate in</div>
                  <div className=" flex items-center">
                    {operator.operatesIn.map((op: any, index: number) => (
                      <div
                        className={`${
                          index > 0 ? "pl-2" : ""
                        } flex items-center `}
                      >
                        <img
                          src={op.logo}
                          alt={op.name}
                          className="h-4 w-4 mr-1"
                        />
                        <span className="font-medium text-gray-500">
                          {op.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 flex flex-col text-gray-500 text-sm">
                  <div className="font-bold text-sm text-gray-700">
                    Vessels number:{" "}
                    <span className="font-medium text-gray-500">
                      {operator.vessels}
                    </span>
                  </div>
                  <div className="font-bold text-sm text-gray-700">
                    Ferry types:{" "}
                    <span className="font-medium font-gray-500  ">
                      {operator.ferryTypes.join(" and ")} ferries
                    </span>{" "}
                  </div>
                </div>

                <div className="mb-4 flex flex-col text-gray-500 text-sm">
                  <div className="font-bold text-sm text-gray-700">
                    Popular vessels:{" "}
                    <span className="font-medium text-[#20b6d7]">
                      {operator.popularVessels.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 text-gray-600 text-sm">
                <p>{operator.description}</p>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-end">
                  <Button
                    variant="link"
                    className="text-[#20b6d7] font-bold p-0"
                  >
                    More about {operator.name} →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FerryCard;
