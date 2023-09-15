"use client";
import React, { useEffect, useRef, useState } from "react";
import { fetchAddress } from "./services";

enum SearchType {
  FROM = "from",
  TO = "to",
}

const Booking = () => {
  const fromRef = useRef<HTMLInputElement | null>(null);
  const toRef = useRef<HTMLInputElement | null>(null);

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const fetchData = async (type: SearchType, query: string) => {
    console.log(type);
    try {
      const data = await fetchAddress(query);

      if (type === SearchType.FROM) {
        setSuggestions(data);
      } else {
        setToSuggestions(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const debounceFunction = setTimeout(async () => {
      if (!fromValue) {
        setSuggestions([]);
        return;
      } else {
        fetchData(SearchType.FROM, fromValue);
      }
    }, 300);

    return () => {
      clearTimeout(debounceFunction);
    };
  }, [fromValue]);

  useEffect(() => {
    const debounceFunction = setTimeout(async () => {
      if (!toValue) {
        setToSuggestions([]);
        return;
      } else {
        fetchData(SearchType.TO, toValue);
      }
    }, 300);

    return () => {
      clearTimeout(debounceFunction);
    };
  }, [toValue]);

  const handleInputChange = async (type: SearchType, value: string) => {
    switch (type) {
      case SearchType.FROM: {
        setFromValue(value);
        break;
      }
      case SearchType.TO: {
        setToValue(value);
        break;
      }
    }
  };

  const handleValueChange = (type: SearchType, value: string) => {
    switch (type) {
      case SearchType.FROM: {
        if (!fromRef.current) return;

        fromRef.current.value = value;
        setSuggestions([]);
        setFromValue("");
        break;
      }
      case SearchType.TO: {
        if (!toRef.current) return;

        toRef.current.value = value;
        setToSuggestions([]);
        setToValue("");
        break;
      }
    }
  };

  return (
    <div className="">
      <div className="flex">
        <form className="flex flex-col w-1/2 max-w-[600px] justify-center  gap-6">
          <h1 className="text-4xl font-bold  text-black">
            Book your <span className="text-yellow-500">Cab&Go</span>
          </h1>
          <div className="flex flex-col">
            <label htmlFor="from" className="mb-2">
              Pick Up:
            </label>

            <div className="relative">
              <input
                type="text"
                id="from"
                ref={fromRef}
                className="input w-full"
                onChange={(e) =>
                  handleInputChange(SearchType.FROM, e.target.value)
                }
              />
              <div className="bg-white shadow-lg absolute w-full z-10">
                {suggestions.map((suggestion: any) => {
                  const valueBelow = suggestion?.full_address
                    ? suggestion?.full_address
                    : suggestion?.place_formatted;

                  return (
                    <div
                      className="px-4 py-1 cursor-pointer hover:bg-slate-100"
                      onClick={() =>
                        handleValueChange(
                          SearchType.FROM,
                          `${suggestion?.name} ${valueBelow}`
                        )
                      }
                    >
                      <p className="font-bold">{suggestion?.name}</p>
                      <p className="text-xs">{valueBelow}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="mb-2">
              Drop-off:
            </label>
            <div className="relative">
              <input
                type="text"
                id="from"
                ref={toRef}
                className="input w-full -z-10"
                onChange={(e) =>
                  handleInputChange(SearchType.TO, e.target.value)
                }
              />
              <div className="bg-white shadow-lg absolute w-full">
                {toSuggestions.map((suggestion: any) => {
                  const valueBelow = suggestion?.full_address
                    ? suggestion?.full_address
                    : suggestion?.place_formatted;

                  return (
                    <div
                      className="px-4 py-1 cursor-pointer hover:bg-slate-100"
                      onClick={() =>
                        handleValueChange(
                          SearchType.TO,
                          `${suggestion?.name} ${valueBelow}`
                        )
                      }
                    >
                      <p className="font-bold">{suggestion?.name}</p>
                      <p className="text-xs">{valueBelow}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="btn-primary mr-auto mt-2">Find a caber</button>
        </form>

        <div className="h-[660px] flex-1">
          <img
            src="./hero_1.png"
            alt=""
            className="h-full  object-contain ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
