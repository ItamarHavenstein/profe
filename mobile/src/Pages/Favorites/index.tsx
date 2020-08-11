import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorite() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorite();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView style={styles.favoritesList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}>
                    {favorites.map((teacher: Teacher) => {
                        return (
                            <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                            />
                        )
                    })}
            </ScrollView>
        </View>
    );
}

export default Favorites;