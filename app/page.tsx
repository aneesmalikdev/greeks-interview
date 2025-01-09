"use client";
import React, { useState } from "react";
import { Search, MapPin, Star, SlidersHorizontal, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { operators } from "@/lib/constant";
import FerryCard from "@/components/ferryCard";

export default function Home() {
  const [showFilterBar, setShowFilterBar] = useState(true);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl font-bold">Ferry operators</h1>
      </div>

      <div className="text-sm text-gray-500 mb-6">
        Discover the 57 ferry operators we work with
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilterBar(!showFilterBar)}
            >
              <SlidersHorizontal className="text-blue-500 h-4 w-4" />
              Filters
            </Button>

            <Select defaultValue="reviews">
              <SelectTrigger className="w-[270px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reviews">
                  Sort by: Reviews number (high first)
                </SelectItem>
                <SelectItem value="rating">Sort by: Rating</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative w-[100px] md:flex hidden">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </div>
          <Button
            variant="outline"
            className="gap-2 text-blue-400 md:flex hidden"
          >
            <MapPin className="h-4 w-4" />
            Live Map View
          </Button>
        </div>

        {/* Operator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="space-y-6">
            {showFilterBar && (
              <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle className="text-lg">Filters </CardTitle>
                  <button
                    onClick={() => setShowFilterBar(false)}
                    className=" p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Operating in</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="greece">Greece</SelectItem>
                        <SelectItem value="italy">Italy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ferry types</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="normal" />
                        <label htmlFor="normal" className="text-sm">
                          Normal ferries
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="high-speed" />
                        <label htmlFor="high-speed" className="text-sm">
                          High-speed ferries
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="md:col-span-3 space-y-4">
            {operators.map((operator) => (
              <FerryCard operator={operator} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
