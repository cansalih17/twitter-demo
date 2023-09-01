import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";

function TweetPage() {
    const [tweets, setTweets] = useState([]);
    const [newTweet, setNewTweet] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.email);


    useEffect(() => {
        const tweetsCollectionRef = collection(firestore, "tweets");
        const q = query(tweetsCollectionRef);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tweetData = [];
            querySnapshot.forEach((doc) => {
                tweetData.push(doc.data());
            });
            setTweets(tweetData);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleTweetSubmit = async () => {
        try {
            if (newTweet.trim() !== "") {
                const tweetsCollectionRef = collection(firestore, "tweets");
                await addDoc(tweetsCollectionRef, {
                    user: email,
                    content: newTweet,
                });

                setNewTweet("");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const signOutFunc = async () => {
        try {
            await signOut(auth);
            dispatch(logout());
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-blue-500 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Tweetler</h1>
                    <button onClick={() => signOutFunc()} className="hover:underline">
                        Çıkış Yap
                    </button>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="p-3">
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                </div>
                <div className="bg-white border rounded-lg shadow-md p-4 mb-4">
                    <textarea
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                        placeholder="Ne düşünüyorsunuz?"
                        value={newTweet}
                        onChange={(e) => setNewTweet(e.target.value)}
                    ></textarea>
                    <div className="flex justify-end mt-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                            onClick={handleTweetSubmit}
                        >
                            Tweetle
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                {tweets.map((tweet, index) => (
                    <div key={index} className="bg-white border rounded-lg shadow-md p-4 mb-4">
                        <div className="flex items-start">
                            <img
                                src="https://i.hizliresim.com/1feqrau.png"
                                alt={tweet.user}
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <p className="text-blue-500 font-semibold">{tweet.user}</p>
                                <p className="text-gray-600">{tweet.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TweetPage;
