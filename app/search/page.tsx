import getSongsByTitle from "@/actions/getSongsByTitle"
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

const revalidate =0;


interface SearchProps {
    searchParams: {
        title:string
    }
}

const Search = async ({ searchParams }: SearchProps) => {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <div 
            className="
                bg-neutal-500
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "
        >
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <div className="text-white text-3xl font-semibold">
                        Search
                    </div>
                    <SearchInput />
                </div>
            </Header>
            <SearchContent songs={songs}/>
        </div>
    )
}

export default  Search;